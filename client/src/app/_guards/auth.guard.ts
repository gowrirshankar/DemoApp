import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export const authGuard = () => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  return accountService.currentUser$.pipe(
    map(user => {
      if(user) return true;
      else {
        toastr.error('You shall not pass!');
        return false;
      }
    })
  )
};
