# Wedding Invitation Web Application

A beautiful and customizable wedding invitation web application built with Next.js and Tailwind CSS.

## Features

- 🎨 Customizable landing page with photos and text
- 🗺️ Google Maps integration for venue locations
- 💳 Bank account information for digital gifts
- 👥 Personalized guest URLs
- 📝 RSVP system
- 📱 Mobile-responsive design
- 🎵 Background music with play/pause control
- ⏰ Countdown timer to wedding date
- 📖 Digital guestbook
- 📱 Social sharing buttons

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Google Maps API key (for map integration)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd my-wedding-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Google Maps API key:
```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

4. Add your images:
   - Place your wedding photos in `public/images/`
   - Add your background music in `public/music/`

## Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploying to Vercel (Recommended)

1. Create a Vercel account at [vercel.com](https://vercel.com)

2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy the application:
```bash
vercel
```

5. Set up environment variables in Vercel dashboard:
   - Go to your project settings
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` with your Google Maps API key

### Alternative Deployment Options

#### Deploying to Netlify

1. Create a Netlify account at [netlify.com](https://netlify.com)

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Login to Netlify:
```bash
netlify login
```

4. Deploy the application:
```bash
netlify deploy
```

5. Set up environment variables in Netlify dashboard:
   - Go to Site settings > Build & deploy > Environment
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` with your Google Maps API key

#### Deploying to AWS Amplify

1. Create an AWS account and set up AWS Amplify

2. Connect your repository to AWS Amplify

3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`

4. Set up environment variables in AWS Amplify console:
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` with your Google Maps API key

## Customization

1. Update the wedding details in `src/app/page.tsx`
2. Modify the bank account information in `src/components/BankDetails.tsx`
3. Customize the theme colors in `tailwind.config.js`
4. Add your own images and music in the `public` directory

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
