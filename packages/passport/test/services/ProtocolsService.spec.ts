import {RequestContext} from "@tsed/common/src";
import {Req} from "@tsed/common/src/mvc/decorators/params/request";
import {InjectorService} from "@tsed/di/src";
import {inject, TestContext} from "@tsed/testing";
import {expect} from "chai";
import * as Passport from "passport";
import * as Sinon from "sinon";
import {stub} from "../../../../test/helper/tools";
import {Protocol, ProtocolsService} from "../../src";


const sandbox = Sinon.createSandbox();
// tslint:disable-next-line:variable-name
const Strategy = Sinon.stub();

describe("ProtocolsService", () => {
  @Protocol({
    name: "local",
    useStrategy: Strategy as any,
    settings: {
      "settings": "settings"
    }
  })
  class LocalProtocol {
    $onInstall() {
    }

    $onVerify(@Req() req: Req) {
      return {"id": 0};
    }
  }

  beforeEach(() => TestContext.create());
  afterEach(TestContext.reset);

  beforeEach(() => {
    sandbox.stub(LocalProtocol.prototype, "$onInstall");
    sandbox.stub(LocalProtocol.prototype, "$onVerify");
    sandbox.stub(Passport, "use");
    Strategy.resetHistory();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should create a protocol", inject([ProtocolsService, InjectorService], (protocolService: ProtocolsService, injector: InjectorService) => {
    // GIVEN
    const provider = injector.getProvider(LocalProtocol)!;

    // WHEN
    const result = protocolService.invoke(provider);

    // THEN
    result.should.be.instanceOf(LocalProtocol);
    result.$onInstall.should.have.been.calledWithExactly(protocolService.strategies.get("local"));
    Passport.use.should.have.been.calledWithExactly("local", protocolService.strategies.get("local"));
    Strategy.should.have.been.calledWithExactly({passReqToCallback: true, settings: "settings"}, Sinon.match.func);
    expect(protocolService.getProtocolsNames()).to.deep.equal(["local"]);
  }));

  it("should call handler", inject([ProtocolsService, InjectorService], async (protocolService: ProtocolsService, injector: InjectorService) => {
    // GIVEN
    stub(LocalProtocol.prototype.$onVerify).returns({id: 0});
    const provider = injector.getProvider(LocalProtocol)!;
    const req = {
      res: {},
      ctx: new RequestContext({id: "1", logger: {}, url: "/"})
    };
    // WHEN
    const result = protocolService.invoke(provider);
    const resultDone: any = await (new Promise((resolve) => {
      Strategy.args[0][1](req, "test", (...args: any[]) => resolve(args));
    }));

    // THEN
    result.$onVerify.should.have.been.calledWithExactly(req);
    expect(resultDone).to.deep.equal([null, {id: 0}]);
  }));

  it("should call handler and catch error", inject([ProtocolsService, InjectorService], async (protocolService: ProtocolsService, injector: InjectorService) => {
    // GIVEN
    const error = new Error("message");
    stub(LocalProtocol.prototype.$onVerify).rejects(error);

    const provider = injector.getProvider(LocalProtocol)!;
    const req = {
      res: {},
      ctx: new RequestContext({id: "1", logger: {}, url: "/"})
    };
    // WHEN
    const result = protocolService.invoke(provider);
    const resultDone: any = await (new Promise((resolve) => {
      Strategy.args[0][1](req, "test", (...args: any[]) => resolve(args));
    }));

    // THEN
    result.$onVerify.should.have.been.calledWithExactly(req);
    expect(resultDone).to.deep.equal([error]);
  }));
});