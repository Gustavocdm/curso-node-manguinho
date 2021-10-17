import { MongoClient, MongoClientOptions } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as MongoClientOptions)
  },

  async disconnect (): Promise<void> {
    this.client.close()
  }
}