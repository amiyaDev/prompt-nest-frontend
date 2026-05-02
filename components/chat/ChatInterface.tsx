import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import UserMessage from "./UserMessage";
import AIMessage from "./AIMessage";
import ChatInput from "./ChatInput";

export default function ChatInterface() {
  return (
    <DashboardWrapper
      activePage="chat"
      contentClassName="bg-background"
      innerClassName="max-w-3xl mx-auto space-y-10 p-4 md:p-8 pb-32"
      footer={null}
      bottomSlot={<ChatInput />}
    >
      <UserMessage message="Can you write a Tailwind CSS component for a glassmorphic sidebar? Use the Indigo accent color from the theme." />
      <AIMessage
        message="Certainly! Here is a minimalist, glassmorphic sidebar implementation using Tailwind CSS. It leverages `backdrop-blur` and semi-transparent backgrounds to create depth."
        codeBlock={{
          language: "html",
          code: `<aside class="w-64 h-screen bg-indigo-900/10 backdrop-blur-xl 
              border-r border-indigo-500/20 py-8 px-6">
  <div class="flex items-center gap-3 mb-10">
    <div class="w-8 h-8 bg-indigo-500 rounded-lg shadow-lg shadow-indigo-500/20"></div>
    <span class="font-bold text-white">Nexus</span>
  </div>
  
  <nav class="space-y-4">
    <a href="#" class="flex items-center gap-3 text-indigo-400 font-medium">
      <span class="material-icons">dashboard</span>
      Dashboard
    </a>
  </nav>
</aside>`
        }}
      />
    </DashboardWrapper>
  );
}
