import {ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { FormComponentClass } from 'src/app/utils/classes/form-component.class';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { trimWhiteSpace } from 'src/app/utils/functions/validators.function';
import {UserService} from '../../../../services/user/user.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../../../services/http/http.service';
import {MegaleiosAlertService} from '../../../megaleios-alert/megaleios-alert.service';
import {ModalComponent} from '../../../shared/components/modal/modal.component';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.sass']
})
export class ProfileFormComponent extends FormComponentClass implements OnInit{
  @ViewChild('changePassword')
  cpTemplateRef: TemplateRef<any>;
  cpNgbModalRef: NgbModalRef;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public httpService: HttpService,
    public ngbModal: NgbModal,
    public megaleiosAlertService: MegaleiosAlertService
  ) {
    super();
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      email: [null, Validators.compose([trimWhiteSpace, Validators.required, Validators.email])],
      phone: [null],
      cpf: [null],
      jobPost: [null, Validators.compose([trimWhiteSpace, Validators.required])],
      password: [null],
      id: [null],
    });
  }

  ngOnInit(): void {
      this.userService.user.subscribe((response: any) => {
        this.form.controls.name.setValue(response?.name);
        this.form.controls.cpf.setValue(response?.cpf);
        this.form.controls.email.setValue(response?.email);
        this.form.controls.phone.setValue(response?.phone);
        this.form.controls.jobPost.setValue(response?.jobPost);
        this.form.controls.password.setValue(response?.password);
        this.form.controls.id.setValue(response?.id);

      });
  }
  handleChangePassword(): void {
    this.cpNgbModalRef = this.ngbModal.open(ModalComponent, { size: 'lg', centered: true });
    this.cpNgbModalRef.componentInstance.templateRef = this.cpTemplateRef;
  }

}
