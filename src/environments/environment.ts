// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {version} from '../../package.json';
export enum AuthMethod {
  NONE,
  TEST,
  LDAP
}
export const environment = {
  production: false,
  api: 'http://localhost:8080',
  path: 'api',
  auth_method: AuthMethod.NONE,
  client_name: 'Clube de turismos Montreal',
  system_name: 'Portal da Transparência',
  system_version: version,
  environment: 'local',
  environment_name: 'Local',
  theme: 'ebonyClay',
  themeAutoContraste: 'ebonyClayAutoContraste',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
