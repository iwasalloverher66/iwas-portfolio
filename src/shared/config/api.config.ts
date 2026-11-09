export class ApiConfig {
  // URL of the hireme-backend worker, set in .env
  static BASE_URL = import.meta.env.VITE_API_URL ?? ''
  static CONTACT = `${ApiConfig.BASE_URL}/api/contact`
}
