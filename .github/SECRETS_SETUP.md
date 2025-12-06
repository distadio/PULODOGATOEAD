# Configuração de Secrets do GitHub Actions

Para que o deploy automático funcione, você precisa configurar os secrets no GitHub.

## Como Configurar os Secrets

1. Acesse o repositório no GitHub: `https://github.com/distadio/PULODOGATOEAD`
2. Vá em **Settings** → **Secrets and variables** → **Actions**
3. Clique em **New repository secret**
4. Adicione os seguintes secrets:

### Secrets Necessários

#### 1. FTP_SERVER
- **Nome**: `FTP_SERVER`
- **Valor**: `ftp.pulodogatoead.com.br`

#### 2. FTP_USERNAME
- **Nome**: `FTP_USERNAME`
- **Valor**: `u950592664.pulodogatoead`

#### 3. FTP_PASSWORD
- **Nome**: `FTP_PASSWORD`
- **Valor**: `Pulodogadoead@2025`

## Verificação

Após configurar os secrets, faça um push para a branch `main` e verifique se o workflow executa corretamente em:
`https://github.com/distadio/PULODOGATOEAD/actions`

## Troubleshooting

Se o deploy ainda falhar:
- Verifique se os valores dos secrets estão corretos (sem espaços extras)
- Verifique se o servidor FTP está acessível
- Verifique os logs do workflow para mais detalhes

