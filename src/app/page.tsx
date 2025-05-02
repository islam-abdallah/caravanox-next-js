import { Metadata } from 'next';
import HomePage from '../components/pages/Home';

export const metadata: Metadata = {
  title: 'Home | Caravans & Mobile Buildings',
  description: 'World-Class Caravans & Mobile Building Solutions',
};

export default function Home() {
  return <HomePage />;
}