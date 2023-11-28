import ProgressBar from '@/components/shared/ProgressBar';
import FeetFeedback from '@/components/ui/FeetFeedback';
import Meter from '@/components/ui/Meter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <section className="grid grid-cols-1 gap-4">
        <FeetFeedback />
        <Meter>
          <ProgressBar className="-scale-x-100" min={0} max={100} value={2} />
          <ProgressBar min={0} max={100} value={2} />
        </Meter>
      </section>
    </main>
  );
}
