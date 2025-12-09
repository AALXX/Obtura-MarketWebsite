"use client";

import { useState } from "react";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex items-center justify-center px-4 pt-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Blog <span className="text-[#ff6b35]">Coming Soon</span>
        </h1>
        
        <p className="text-lg text-gray-400 mb-10">
          We're writing about DevOps, European tech, and building for SMEs.
        </p>

        {isSubmitted ? (
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
            ✓ Thanks! We'll notify you when we publish our first post.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-4 rounded-lg bg-[#2a2a2a] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="h-12 px-6 rounded-lg bg-[#ff6b35] text-black font-semibold hover:bg-[#ff7b45] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#ff6b35]/20 whitespace-nowrap"
            >
              {isLoading ? "..." : "Notify Me"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}