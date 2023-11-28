import ProgressBar from '@/components/shared/ProgressBar';
import FeetFeedback from '@/components/ui/FeetFeedback';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <FeetFeedback />
      <ProgressBar min={0} max={100} value={2} />
    </main>
  );
}
