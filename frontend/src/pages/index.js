import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <h1>Ki Blossom</h1>
        <Link href="/quiz">
          <button>Take Quiz</button>
        </Link>
      </div>
    </Layout>
  );
}
