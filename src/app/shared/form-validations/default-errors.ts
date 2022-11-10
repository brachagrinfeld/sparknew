import { LocalizationService } from "../localization/localization.service";
import { ErrorMessage } from "./models/error-message";


export const DEFAULT_ERRORS: ErrorMessage[] = [
  {
    error: "invalidPhone",
    format: (label, translator) => translator.Translate("ERRORS.INVALID_PHONE")
  },
  {
    error: "required",
    format: (label: string, translator: LocalizationService) => `${label} ${translator.Translate('ERRORS.REQUIRED')}`
  },
  {
    error: "pattern",
    format: (label: string, translator: LocalizationService) => `${translator.Translate("ERRORS.FIELD")} ${label} ${translator.Translate('ERRORS.INVALID')}`
  },
  {
    error: "minlength",
    format: (label, translator, error) =>
      `${translator.Translate("ERRORS.FIELD")} ${label} ${translator.Translate('ERRORS.MIN_LENGTH')} ${error.requiredLength} ${translator.Translate('ERRORS.CHARS')}`
  },
  {
    error: "maxlength",
    format: (label, translator, error) =>
      `${translator.Translate("ERRORS.FIELD")} ${label} ${translator.Translate('ERRORS.MAX_LENGTH')} ${error.requiredLength} ${translator.Translate('ERRORS.CHARS')}`
  },
  {
    error: "requiredTrue",
    format: (label, translator) => `${label} ${translator.Translate('ERRORS.REQUIRED')}`
  },
  {
    error: "email",
    format: (label, translator) => translator.Translate('ERRORS.MAIL')
  },
  {
    error: "max",
    format: (label, translator, error) => `${translator.Translate("ERRORS.FIELD")} ${label} ${translator.Translate('ERRORS.MAX')} ${error.max}`
  },
  {
    error: "min",
    format: (label, translator, error) => `${translator.Translate("ERRORS.FIELD")} ${label} ${translator.Translate('ERRORS.MIN')} ${error.min}`
  },
  {
    error: "telOrMailValidation",
    format: () => 'נא הכנס כתובת מייל תקינה או מספר טלפון'
  },
  {
    error: "correctPassword",
    format: (label, translator) => translator.Translate("ENUMS.Validators.ValidPass")
  },
  {
    error: "passwordMismatch",
    format: (label, translator) => translator.Translate("ERRORS.PASSWORD_MISMATCH")
  },
  {
    error: "exist",
    format: (label, translator) => translator.Translate("ERROR_MESSAGES.USER_NAME_EXISTS")
  },
  {
    error: "notExist",
    format: (label, translator) => translator.Translate("ERROR_MESSAGES.NAME_IS_NOT_IN_LIST")
  },
  {
    error: "onlyNumbers",
    format: (label, translator) =>  `${translator.Translate("ERRORS.THIS_FIELD")} ${translator.Translate("ERRORS.ONLY_NUMBERS")}`
  },
  {
    error: "biggerThan",
    format: (label, translator, error) =>  `${label} ${translator.Translate("ERRORS.BIGGER_THAN")}${error}`
  }
];
