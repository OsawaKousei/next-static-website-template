import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';
import { routing } from '@/i18n/routing';
import '../globals.css';

const domain = 'https://example.com';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  
  return {
    title: messages.Metadata.title,
    description: messages.Metadata.description,
    alternates: {
      canonical: `${domain}/${locale}/`,
      languages: {
        ja: `${domain}/ja/`,
        en: `${domain}/en/`,
        'x-default': `${domain}/en/`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
