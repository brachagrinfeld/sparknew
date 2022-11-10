export enum Localization {
    He = 'he',
    En = 'en'
}

export enum VerificationType {
    Mail = 1,
    Phone,
}


export enum ExportType {
    Excel = 1,
}
export enum LoginStatus {
    Succeeded = 0,
    InvalidLogin,
    BlockedUser,
    RequiredVerification,
    VerificationCodeSent,
    InvalidVerificationCode,
    GeneralError

}


export enum SortDirection {
    Asc = 1,
    Desc = 2
}
export enum NavigateMode {
    Previous = 1,
    Next,
    First,
    Last
}

export enum SelectionMode {
    None = '',
    Multiple = 'multiple',
    Single = 'single'
}
export enum EntityState {
    NotChanged = 0,
    New = 4,
    Deleted = 8,
    Modified = 16
}


export enum MessageTypes {
    warn,
    error,
    success,
    info
}
export enum EditableMode {
    EditForNew,
    Edit,
    Disable
}
export enum FieldTypes {
    ColorPicker,
    LookupComboBox,
    EnumComboBox,
    DisabledComboBox,
    ComboBoxYN,
    Spinner,
    ViewFiled,
    DisabledFiled,
    DisabledSpinnerFiled,
    DisabledSearch,
    InputWithValidations,
    Search,
    Date,
    HebrewDate,
    ShortDate,
    DisabledDate,
    Password,
    Number,
    Amount,
    Tooltip,
    Tool,
    Template
}
export enum TransactionSumType {
    NIS = 1,
    Dollar = 2,
    Pound = 16,
    Euro = 19,
    WaitingShekelBit = 5
}
export enum CurrencyType {
    ILS = 1,
    USD = 2,
    GBP = 16,
    EUR = 19,
}

export enum ResolutionType {
    Desktop,
    Mobile
}



export enum ResponseStatus {
    Succeeded,
    NotSucceeded,
    Unauthorized
}




export enum DisplayMode {
    HideBreadcrumbs = 1,
    HideActiveLink = 2,
    HideAll = 3
}
export enum ComponentType {
    breadcrumbs = 1,
    activePageLink = 2
}
export enum InputMode {
    Editing = 1,
    Reading = 2
}



export enum FormMode {
    View = 1,
    New,
    Edit,
    Card
}

export enum BooleanEnum {
    IsNot = 0,
    Is = 1,
}

export enum Validators {
    OnlyNumbers = 1,
    OnlyLetters = 2,
    PhoneNumber = 3,
    ValidPass = 4
}

export enum Patterns {
    "^[0-9]*$" = Validators.OnlyNumbers,
    "^([^0-9]*)$" = Validators.OnlyLetters,
    "^[0-9\+]{1,}[0-9\-]{7,10}$" = Validators.PhoneNumber,
    "^((?=.*[0-9])(?=.*[a-zA-Z]).{8,40})$" = Validators.ValidPass
}



export enum FieldOption {
    Required = 1,
    Hidden = 2,
    Editable = 3,
    ReadOnly = 4
}
export enum Role {
    User = 1
}