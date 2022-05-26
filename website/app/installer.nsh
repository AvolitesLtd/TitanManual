!include "WordFunc.nsh"
  !insertmacro VersionCompare

!macro customInit
  ClearErrors
  SetRegView 64
  ReadRegStr $0 HKLM "Software\Avolites\Manual" "Version"
  IfErrors init.cont ; older versions might not have "Version" string set
  ${VersionCompare} $0 ${version} $1
  IntCmp $1 2 init.cont
    MessageBox MB_OK "Avolites Manual is already up to date or higher version." /SD IDOK
    Quit
  init.cont:
    DetailPrint "Version check passed."
!macroend

!macro customInstall
  SetRegView 64
  WriteRegStr HKLM "Software\Avolites\Manual" "Version" ${version}
!macroend
