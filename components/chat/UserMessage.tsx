interface UserMessageProps {
  message: string;
  avatar?: string;
}

export default function UserMessage({ message, avatar }: UserMessageProps) {
  return (
    <div className="flex flex-col items-end group">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[10px] font-bold text-gray-500 tracking-wider">YOU</span>
        <img alt="User avatar" className="w-6 h-6 rounded-full" src={avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuDCaZHJCl8qPaClQ_4ldUgoH6PwMGM8YwtR08B7L7RPAlkma8m_U1SxdNIHp-xT9BOC9K-kp25IwXnX5nQPqoJy9BHnzNF6lK6fbkaLdP8NI5J1AdSsRPJ2m0ck9t_N_QAecTIGgDN_O9AzRuhZIFAA1Ygov2k4YxRifrmxmn-E_VkKUeiL3ebs8NXfDKawY3KuUqCkHQsxu091bkinH7JpLSscbu8LJrs8CF07pjiFK650aURK9Vi0V53twjOEfmlQ7hTAZ0tXt_8"} />
      </div>
      <div className="bg-[#171717] border border-[#262626] rounded-xl rounded-tr-none px-5 py-4 max-w-[85%] shadow-sm">
        <p className="text-on-surface font-body-md">{message}</p>
      </div>
    </div>
  );
}