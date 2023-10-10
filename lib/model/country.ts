// models/Country.ts
import mongoose, { Schema } from 'mongoose';

const countrySchema = new mongoose.Schema({
  name: String,
  dialCode: String,
  capital: String,
  officialLanguage: String,
  currency: {
    symbol: String,
    isoCode: String,
  },
  twoLetterCode: String,
  Summary: String,
});

export default mongoose.models.Country || mongoose.model('Country', countrySchema);
