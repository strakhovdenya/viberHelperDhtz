import {Injectable} from '@angular/core';
import {ScheduleElement} from "../table/interface/sheduleElement";

@Injectable({
  providedIn: 'root'
})
export class ImportToSiteService {

  constructor() {
  }

  import(data: Array<ScheduleElement>): string {
    let month, year = '';
    if (data[0]) {
      const date = data[0].year_month;

      let [yearNum, monthNum] = date.split('-');
      const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
      month = months[Number(monthNum) - 1];
      year = yearNum;
    }

    const html = this.getHeadPart(month, year) + this.getRows(data) + this.getFooterPart();

    return html;
  }

  dataEmptySanitize(param) {
    if (param === "" || param === undefined) {
      return '';
    }
    return param;
  }

  isWeekEndDay(data: string): boolean {
    let [day, month, year] = data.split('.')
    let date = new Date(Number(year), Number(month) - 1, Number(day));
    let dayOfWeek = date.getDay();
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      return true
    }

    return false;
  }

  getRows(data: Array<ScheduleElement>): string {
    let result = ``;
    for (let row of data) {
      let textColor = '#000000';
      let backGroundColor = '#ffffff';
      if (this.isWeekEndDay(row.data)) {
        textColor = '#FF0000'
        backGroundColor = '#ffcc99'
      }

      result += `
      <tr>
        <td align="center"><font style="background-color: ${backGroundColor};" color="${textColor}">${this.dataEmptySanitize(row.data)}</font></td>
        <td align="center"><font color="#000000">${this.dataEmptySanitize(row.ice_time)}</font></td>
        <td align="center"><font color="#000000">${this.dataEmptySanitize(row.ice_place)}</font></td>
        <td align="center"><font color="#000000">${this.dataEmptySanitize(row.ice_gathering_time)}</font></td>
        <td align="center"><font color="#000000">${this.dataEmptySanitize(row.ground_time)}</font></td>
        <td align="center"><font color="#000000">${this.dataEmptySanitize(row.ground_place)}</font></td>
        <td align="center"><font color="#000000">${this.dataEmptySanitize(row.ground_gathering_time)}</font></td>
      </tr>
      `;
    }

    return result;
  }

  getHeadPart(month: string, yaer: string): string {
    return `
     <p align="center"><span style="font-size: 18px;"><strong><font style="background-color: #ffffff;" color="#000080"><u>${month}&nbsp;${yaer}р.</u></font></strong></span></p>
    <table class="elder" style="height: 59px; width: 100%;" border="1" width="100%">
      <tbody>
        <tr>
            <td style="width: 30px; height: 12px;" rowspan="2" align="center"><font color="#000000"><strong>ДАТА</strong></font></td>
            <td style="width: 105px; height: 12px;" colspan="3" align="center"><font color="#000000"><strong>ЛІД</strong></font></td>
            <td style="width: 110px; height: 12px;" colspan="3" align="center"><font color="#000000"><strong>ЗЕМЛЯ</strong></font></td>
        </tr>
        <tr>
            <td style="width: 105px; height: 12px;" align="center"><font color="#000000"><strong>ЧАС</strong></font></td>
            <td style="width: 110px; height: 12px;" align="center"><font color="#000000"><strong>MIСЦЕ</strong></font></td>
            <td style="width: 110px; height: 12px;" align="center"><font color="#000000"><strong>ЗБIР</strong></font></td>
            <td style="width: 105px; height: 12px;" align="center"><font color="#000000"><strong>ЧАС</strong></font></td>
            <td style="width: 110px; height: 12px;" align="center"><font color="#000000"><strong>MIСЦЕ</strong></font></td>
            <td style="width: 110px; height: 12px;" align="center"><font color="#000000"><strong>ЗБIР</strong></font></td>
        </tr>`
  }

  getFooterPart(): string {
    return `</tbody>
</table>`
  }
}
