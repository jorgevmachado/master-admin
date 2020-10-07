import {version} from '../../package.json';

export enum AuthMethod {
  NONE,
  TEST,
  LDAP
}
export const environment = {
  production: true,
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
