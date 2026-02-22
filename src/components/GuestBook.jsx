import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, MessageSquare, Quote } from "lucide-react";

const GuestBook = () => {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await fetch("/api/comments");
            if (!response.ok) throw new Error("Failed to fetch comments");
            const data = await response.json();
            setComments(data);
        } catch (err) {
            console.error("Error fetching comments:", err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !comment) return;

        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, comment }),
            });

            if (!response.ok) throw new Error("Failed to post comment");

            const newComment = await response.json();
            setComments([newComment, ...comments]);
            setName("");
            setComment("");
        } catch (err) {
            setError("Failed to post comment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-cursive weight-400 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">Guest Book</h2>
                <p className="text-neutral-400 max-w-lg mx-auto">Leave a note, a word of encouragement, or just say hi!</p>
            </div>

            {/* Submission Form */}
            <div className="max-w-xl mx-auto mb-20 bg-neutral-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-white/20 transition-all text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-neutral-200 transition-all disabled:opacity-50 text-sm"
                            >
                                <Send size={16} />
                                {isSubmitting ? "Posting..." : "Sign Guest Book"}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Message</label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-4 text-neutral-600" size={16} />
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Write something nice..."
                                rows="3"
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-white/20 transition-all resize-none text-sm"
                                required
                            ></textarea>
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-xs text-center">{error}</p>}
                </form>
            </div>

            {/* Comments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {comments.map((c, index) => (
                        <motion.div
                            key={c._id || index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative group bg-[#0a0a0a] border border-white/5 p-8 rounded-4xl hover:bg-[#111] transition-colors overflow-hidden"
                        >
                            {/* Decorative Quote Icon */}
                            <Quote
                                className="absolute right-6 top-6 text-white/5 group-hover:text-white/10 transition-colors"
                                size={80}
                                strokeWidth={1}
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative">
                                        <img
                                            src={c.avatar}
                                            alt={c.name}
                                            className="w-12 h-12 rounded-full border border-white/10 bg-neutral-900"
                                        />
                                        <div className="absolute inset-0 rounded-full shadow-inner shadow-black/50"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm tracking-tight">{c.name}</h4>
                                        <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-[0.2em]">
                                            {new Date(c.created_at).toLocaleDateString("en-US", { month: 'short', day: 'numeric' })}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-neutral-400 text-[15px] leading-relaxed font-medium">
                                    {c.comment}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {comments.length === 0 && !isSubmitting && (
                <div className="text-center py-20 bg-neutral-900/20 rounded-[3rem] border border-dashed border-white/5">
                    <MessageSquare className="mx-auto mb-4 text-neutral-800" size={40} />
                    <p className="text-neutral-600 font-medium tracking-wide">Be the first to leave a message</p>
                </div>
            )}
        </section>
    );
};

export default GuestBook;
