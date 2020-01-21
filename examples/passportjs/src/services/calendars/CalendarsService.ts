import {Service} from "@tsed/common";
import {Calendar} from "../../models/Calendar";
import {MemoryCollection} from "../../utils/MemoryCollection";

@Service()
export class CalendarsService extends MemoryCollection<Calendar> {
  constructor() {
    super(Calendar);

    require("../../../resources/calendars.json")
      .map((obj) => {
        return this.create(obj);
      });
  }

  /**
   * Find a calendar by his ID.
   * @param id
   * @returns {undefined|Calendar}
   */
  async findById(id: string): Promise<Calendar> {
    return this.findById(id);
  }
}
