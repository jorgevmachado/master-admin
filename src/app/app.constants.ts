import {AuthMethod, environment} from '../environments/environment';

export const AUTH_METHOD_ENUM     = AuthMethod;
export const API_BASE             = environment.api;
export const API_PATH             = environment.path;
export const AUTH_METHOD          = environment.auth_method;
export const CLIENT_NAME          = environment.client_name;
export const ENVIRONMENT          = environment.environment;
export const ENVIRONMENT_NAME     = environment.environment_name;
export const SYSTEM_NAME          = environment.system_name;
export const SYSTEM_VERSION       = environment.system_version;
export const THEME                = environment.theme;
export const THEME_AUTO_CONTRASTE = environment.themeAutoContraste;

export const MESSAGE = {
  ERROR: {
    MSG001: 'Ocorreu um erro inesperado.',
    MSG002: 'Não autorizado.',
    MSG003: 'Recurso não encontrado. Verifique o console para mais detalhes.',
    MSG004: 'Erro de validação!',
    MSG005: 'Ocorreu um erro no servidor.'
  }
};
export const PATH = {
  HOME: 'home',
  VENDAS: {
    TITLE: 'vendas',
    PROPOSTA: 'proposta'
  },
  ACAO: {
    ADD: 'cadastrar',
    EDIT: ':id/editar',
    DETAIL: ':id/detalhar',
  }
};
