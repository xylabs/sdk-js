import { SecretsManager } from '@aws-sdk/client-secrets-manager'
import NodeCache from 'node-cache'

const region = 'us-east-1'
const envCache = new NodeCache({ stdTTL: 3600 * 24 })

export const getEnvFromAws = async (secretId: string) => {
  const cacheResult = envCache.get<Record<string, string>>(secretId)
  if (cacheResult) {
    return cacheResult
  } else {
    const client = new SecretsManager({ region })
    const awsResult = await client.getSecretValue({ SecretId: secretId })
    console.log(`ENV read from AWS Success [${awsResult?.Name}, ${!!awsResult?.SecretString}, ${!!awsResult?.SecretBinary}]`)
    if (awsResult?.SecretString) {
      const secretObject = JSON.parse(awsResult?.SecretString) as Record<string, string>
      console.log(`ENV read from AWS [${Object.entries(secretObject).length}]`)
      envCache.set(secretId, secretObject)
      return secretObject
    } else {
      throw new Error('Missing SecretString')
    }
  }
}
