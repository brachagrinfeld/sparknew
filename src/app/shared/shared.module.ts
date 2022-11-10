import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';

import { AuthGuard } from "./guards/auth.guard";
import { CommonService } from "./services/common.service";
import { HttpClient } from "@angular/common/http";
import { APIInterceptor } from './interceptors/api-url.interceptor';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FormControlDirective } from './form-validations/directives/form-control.directive';
import { FormValidationDirective } from './form-validations/directives/form-validation.directive';
import { MessagesComponent } from './form-validations/components/messages/messages.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppAuthService } from './services/app-auth.service';
import { ProvideParentForm } from './directives/provide-parent-form.directive';
import { AppAutofocus } from './directives/auto-focus.directive';
import { OnlyNumber } from './directives/only-number.directive';
import { AppEqualToValueValidator } from './directives/equal-to-value-validator.directive';
import { AppEqualValidator } from './directives/equal-to-validation.directive';
import { AppNotZeroValidator } from './directives/not-zero-validation.directive';
import { PasswordViewPipe } from './pipes/password-view.pipe';
import { DelayClickDirective } from './directives/delay-click.directive';
import { MaxValidatorDirective } from './validators/max/max-validator.directive';
import { MinValidatorDirective } from './validators/min/min-validator.directive';
import { ConfirmationService } from 'primeng/api';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AmountInputComponent } from './components/amount-input/amount-input.component';
import { CustomMessageComponent } from './components/customMessage/customMessage.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AdvMessageService } from './services/message.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { BlockableDivComponent } from './components/blockable-div/blockable-div.component';
import { DelayEventDirective } from './directives/delay-event.directive';
import { CanLeaveComponentGuard } from './guards/can-leave-component.guard';
import { ObservableFilterPipe } from './pipes/observable-filter.pipe';
import { FilterListPipe } from './pipes/filter-list.pipe';
import { RemoveEmptiesPipe } from './pipes/remove-empties.pipe';
import { MaxlengthMaskDirective } from './directives/input-masks/maxlength-mask.directive';
import { PhoneMaskDirective } from './directives/input-masks/phone-mask.directive';
import { PasswordComponent } from './components/password/password.component';
import { FormValidationsService } from './form-validations/services/form-validations.service';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,
    FormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ProgressBarModule,
    SidebarModule,
    CalendarModule,
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FieldsetModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    MultiSelectModule,
    OverlayPanelModule,
    SidebarModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    RadioButtonModule,
    ScrollPanelModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    TableModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    VirtualScrollerModule,
    BlockUIModule,
    ProgressSpinnerModule,

  ],
  exports: [
    ProgressBarModule,
    SidebarModule,
    DelayEventDirective,
     BlockableDivComponent,
     MaxValidatorDirective, MinValidatorDirective, 
    FormsModule, ReactiveFormsModule, TranslateModule,
    CalendarModule,
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FieldsetModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MultiSelectModule,
    OverlayPanelModule,
    SidebarModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    RadioButtonModule,
    ScrollPanelModule,
    SelectButtonModule,
    SlideMenuModule,
    SliderModule,
    SpinnerModule,
    SplitButtonModule,
    TableModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    VirtualScrollerModule,
    ProvideParentForm,
    AppAutofocus,
    OnlyNumber,
    AppEqualToValueValidator,
    AppEqualValidator,
    AppNotZeroValidator,
    PasswordViewPipe,
    DelayClickDirective,
    AmountInputComponent,
    BlockUIModule,
    ProgressSpinnerModule,
    CustomMessageComponent,
    DialogComponent,
    ObservableFilterPipe,
    FilterListPipe,
    FormControlDirective,
    FormValidationDirective,
    MessagesComponent,
    PasswordComponent
  ],
  declarations: [
     BlockableDivComponent,MaxValidatorDirective, MinValidatorDirective,
    ProvideParentForm,
    AppAutofocus,
    OnlyNumber,
    AppEqualToValueValidator,
    AppEqualValidator,
    AppNotZeroValidator,
    PasswordViewPipe,
    DelayEventDirective,
    DelayClickDirective,
    CustomMessageComponent,
    FilterListPipe,
    AmountInputComponent,
    DialogComponent,
    ObservableFilterPipe,
    RemoveEmptiesPipe,
    MaxlengthMaskDirective,
    PhoneMaskDirective,
    FormControlDirective,
    FormValidationDirective,
    MessagesComponent,
    PasswordComponent,

  ]
})
export class SharedModule {
  static forRootOrChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,

      // the singletone providers - one instance for all modules
      providers: [HttpClient,
        CanLeaveComponentGuard,
        AuthGuard,
        AppAuthService,//, AuthInterceptor, 
        CommonService,
        APIInterceptor,
        AdvMessageService, ConfirmationService,
        DatePipe,
        PasswordViewPipe,
        FilterListPipe,
        DecimalPipe,
        ObservableFilterPipe,
        FormValidationsService,

      ]
    };
  }
}
