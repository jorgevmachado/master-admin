import { CpfPipe } from './cpf.pipe';

describe('CpfPipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new CpfPipe();
  });
  it('cria uma instância - CpfPipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('Verifica a transformação do CpfPipe - consegue transformar', () => {
    expect(pipe.transform('92515182038')).toEqual('925.151.820-38');
  });

  it('Verifica a transformação do CpfPipe - não consegue transformar', () => {
    expect(pipe.transform('925')).toEqual('925  ( CPF Inválido! )');
  });
});
