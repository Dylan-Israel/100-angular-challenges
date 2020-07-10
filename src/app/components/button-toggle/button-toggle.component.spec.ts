import { ButtonToggleComponent } from './button-toggle.component';
import { ButtonMeta } from './button-meta.model';

describe('Button Toggle Component', () => {
  it('exists', () => {
    // assert
    expect(ButtonToggleComponent).toBeDefined();
  });

  describe('General', () => {
    let component: ButtonToggleComponent;

    beforeEach(() => {
      component = new ButtonToggleComponent();
    });

    describe('defaults', () => {
      it('options is empty', () => {
        // assert
        expect(Array.isArray(component.options)).toBe(true);
        expect(component.options.length).toBe(0);
      });
    });

    describe('selected', () => {
      it('selects the active option', () => {
        // arrange
        component.options = [
          new ButtonMeta({ title: 'title 1', isActive: true }),
          new ButtonMeta({ title: 'title 2' }),
          new ButtonMeta({ title: 'title 3' }),
        ];

        // act
        component.selected(component.options[1]);

        // assert
        expect(component.options[0].isActive).toBe(false);
        expect(component.options[1].isActive).toBe(true);
      });

      it('notifies parent of button selection', () => {
        // arrange
        component.options = [
          new ButtonMeta({ title: 'title 1', isActive: true }),
          new ButtonMeta({ title: 'title 2' }),
          new ButtonMeta({ title: 'title 3' }),
        ];
        component.selection.subscribe((value: ButtonMeta) => {
          // assert
          expect(value).toBe(component.options[2]);
        });

        // act
        component.selected(component.options[2]);
      });
    });
  });
});
