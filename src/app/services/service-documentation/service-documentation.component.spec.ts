import { ServiceDocumentationComponent } from './service-documentation.component';
import { SnackbarService } from '../snackbar/snackbar.service';
import { UserServiceMock } from '../user/user.service.mock';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { AUserService } from '../user/a-user.service';

describe(ServiceDocumentationComponent.name, () => {

  describe('General', () => {
    let service: ServiceDocumentationComponent;
    let userService: AUserService;

    beforeEach(() => {
      userService = new UserServiceMock();
      service = new ServiceDocumentationComponent(userService, null, null, null);
    });
  });
});
