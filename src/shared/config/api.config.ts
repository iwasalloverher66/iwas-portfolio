export class ApiConfig {
  // Set VITE_API_URL in .env.production.local to the deployed hireme-backend worker URL
  static BASE_URL = import.meta.env.VITE_API_URL ?? ''
  static CONTACT = `${ApiConfig.BASE_URL}/api/contact`
}
