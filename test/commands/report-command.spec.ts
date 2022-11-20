import { ReportCommand } from '../../src/commands/report-command';
import TableTop from '../../src/models/table-top';
import Printer from '../../src/printer';

jest.mock('../../src/models/table-top');
jest.mock('../../src/printer');

const TableTopMock = TableTop as jest.MockedClass<typeof TableTop>;
const PrinterMock = Printer as jest.MockedClass<typeof Printer>;

describe('ReportCommand', () => {
  let printer: Printer;
  let tableTop: TableTop;

  beforeEach(() => {
    tableTop = new TableTopMock();
    TableTopMock.mockClear();

    printer = new PrinterMock('test');
    PrinterMock.mockClear();
  });

  describe('execute', () => {
    it('should call report', () => {
      jest.spyOn(tableTop, 'report').mockReturnValue('1,2,NORTH');
      const reportCommand = new ReportCommand(tableTop, 'REPORT');
      jest.spyOn(reportCommand, 'printer', 'get').mockReturnValue(printer);
      reportCommand.execute();
      expect(tableTop.report).toHaveBeenCalled();
      expect(printer.report).toHaveBeenCalledWith('1,2,NORTH');
    });
  });
});
