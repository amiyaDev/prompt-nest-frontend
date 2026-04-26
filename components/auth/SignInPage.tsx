import AuthHeader from './AuthHeader';
import SignInForm from './SignInForm';
import AuthFooter from './AuthFooter';

export default function SignInPage() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col relative overflow-hidden">
      <AuthHeader />
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 glass-background -z-10"></div>
        <div className="absolute inset-0 mesh-pattern -z-10 opacity-50"></div>
        <div className="w-full max-w-[420px]">
          <SignInForm />
          <AuthFooter />
        </div>
      </main>
      {/* Decorative Gradient Blobs */}
      <div className="fixed top-[10%] -left-[5%] w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -z-20"></div>
    </div>
  );
}