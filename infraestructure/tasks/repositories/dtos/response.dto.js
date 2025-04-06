export class ResponseDto {
  meta = {}
  dates = {}
  constructor(meta, dates) {
    this.meta = meta;
    this.dates = dates;
  }
}
