import { CopyDirective } from './copy.directive';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

describe(CopyDirective.name, () => {
  it('exists', () => {
    // assert
    expect(CopyDirective).toBeDefined();
  });

  describe('General', () => {
    let directive: CopyDirective;
    let nav: any;
    let doc: any;
    let snackbarService: SnackbarService;
    let copiedText = null;
    let command = null;

    beforeEach(() => {
      nav = {
        clipboard: {
          writeText(text: string) {
            copiedText = text;
          }
        }
      };
      doc = {
        execCommand(text: string) {
          command = text;
        }
      };
      snackbarService = new SnackbarService();
      directive = new CopyDirective(nav as any, doc as any, snackbarService);
    });

    describe('copy', () => {
      it('copies correct text', async () => {
        // arrange
        const text = 'Hello World';
        copiedText = null;
        directive.appCopy = text;

        // act
        await directive.copy();

        // assert
        expect(copiedText).toBe(text);
      });

      it('document copies', async () => {
        // arrange
        command = null;

        // act
        await directive.copy();

        // assert
        expect(command).toBe('copy');
      });

      it('notify snackbar of successful copy', async () => {
        // arrange
        spyOn(directive.snackbarService, 'callSnackbar');

        // act
        await directive.copy();

        // assert
        expect(directive.snackbarService.callSnackbar).toHaveBeenCalledWith('Copied Successfully.');
      });

      it('notify snackbar of successful copy', async () => {
        // arrange
        spyOn(directive.snackbarService, 'callSnackbar');
        spyOn(directive.navigator.clipboard, 'writeText').and.throwError('');

        // act
        await directive.copy();

        // assert
        expect(directive.snackbarService.callSnackbar).toHaveBeenCalledWith('Copied Failed.');
      });
    });
  });
});
