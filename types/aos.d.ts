declare module "aos" {
  const AOS: {
    init: (options?: { duration?: number; once?: boolean; easing?: string; offset?: number }) => void;
  };
  export default AOS;
}
