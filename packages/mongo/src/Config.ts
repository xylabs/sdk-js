/** Public configuration options for the Mongo SDK, safe to expose to clients. */
export interface BaseMongoSdkPublicConfig {
  /** Delay in milliseconds before closing idle connections. */
  closeDelay?: number
  /** The MongoDB collection name to operate on. */
  collection: string
  /** Maximum number of connections in the connection pool. */
  maxPoolSize?: number
}

/** Private configuration options for the Mongo SDK containing connection credentials. */
export interface BaseMongoSdkPrivateConfig {
  /** A full MongoDB connection string, used instead of individual credential fields. */
  dbConnectionString?: string
  /** The MongoDB Atlas cluster domain. */
  dbDomain?: string
  /** The database name to connect to. */
  dbName?: string
  /** The password for MongoDB authentication. */
  dbPassword?: string
  /** The username for MongoDB authentication. */
  dbUserName?: string
}

/** Combined public and private MongoDB SDK configuration. */
export type BaseMongoSdkConfig = BaseMongoSdkPublicConfig & BaseMongoSdkPrivateConfig
