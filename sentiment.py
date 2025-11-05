import tkinter as tk
from tkinter import ttk, messagebox
import praw
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import matplotlib.pyplot as plt
import traceback

# === Reddit API Credentials ===
reddit = praw.Reddit(
    client_id='YfpdAyVZkvohRRah_8gkWA',           # Replace with your actual client_id
    client_secret='cSsYFTvIx7K-zuE5g_iXEyXf1pkV7Q',       # Replace with your actual client_secret
    user_agent='lassanApp/1.0'
)

analyzer = SentimentIntensityAnalyzer()

class LassanApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Sentiment App")

        self.subreddit_var = tk.StringVar()
        self.subreddit_var.set("r/CasualConversation")

        ttk.Label(root, text="Choose Subreddit:").pack(pady=5)
        self.subreddit_dropdown = ttk.Combobox(
            root, textvariable=self.subreddit_var,
            values=["r/CasualConversation", "r/TrueOffMyChest"],
            state='readonly'
        )
        self.subreddit_dropdown.pack(pady=5)

        self.fetch_button = ttk.Button(root, text="Fetch Posts", command=self.fetch_posts)
        self.fetch_button.pack(pady=5)

        self.analyze_button = ttk.Button(root, text="Analyze Sentiment", command=self.analyze_posts)
        self.analyze_button.pack(pady=5)

        self.text_display = tk.Text(root, wrap="word", width=80, height=15)
        self.text_display.pack(pady=10)

        self.result_display = tk.Text(root, wrap="word", width=80, height=8, bg="#eef")
        self.result_display.pack(pady=10)

        self.posts = []

    def fetch_posts(self):
        self.posts.clear()
        self.text_display.delete(1.0, tk.END)
        subreddit_name = self.subreddit_var.get().replace("r/", "")

        try:
            subreddit = reddit.subreddit(subreddit_name)
            for post in subreddit.hot(limit=30):
                if not post.stickied and (post.selftext or len(post.title) > 20):
                    content = f"{post.title.strip()} {post.selftext.strip()}"
                    self.posts.append(content)
                    self.text_display.insert(tk.END, content + "\n\n")
            messagebox.showinfo("Fetch Complete", f"Fetched {len(self.posts)} posts.")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to fetch posts:\n{e}")

    def map_to_scale(self, compound):
        # compound: -1 to 1 → 1 to 10 scale
        normalized = (compound + 1) / 2  # Now 0 to 1
        scaled = round(normalized * 9) + 1  # 1 to 10
        return scaled

    def analyze_posts(self):
        if not self.posts:
            messagebox.showwarning("No Data", "Please fetch posts first")
            return

        pos_count = neu_count = neg_count = 0
        self.result_display.delete(1.0, tk.END)

        for text in self.posts:
            scores = analyzer.polarity_scores(text)
            compound = scores['compound']
            sentiment_score = self.map_to_scale(compound)

            if compound >= 0.05:
                sentiment = "Positive"
                pos_count += 1
            elif compound <= -0.05:
                sentiment = "Negative"
                neg_count += 1
            else:
                sentiment = "Neutral"
                neu_count += 1

            self.result_display.insert(
                tk.END, f"Sentiment: {sentiment} | Score: {sentiment_score}/10\n"
            )

        total = len(self.posts)
        self.result_display.insert(tk.END, f"\nTotal Posts Analyzed: {total}\n")
        self.result_display.insert(tk.END, f"Positive: {pos_count}, Neutral: {neu_count}, Negative: {neg_count}\n")

        self.plot_sentiment_distribution(pos_count, neu_count, neg_count)

    def plot_sentiment_distribution(self, pos, neu, neg):
        labels = ['Positive', 'Neutral', 'Negative']
        counts = [pos, neu, neg]
        colors = ['green', 'gray', 'red']

        plt.figure(figsize=(6, 4))
        plt.bar(labels, counts, color=colors)
        plt.title("Sentiment Distribution")
        plt.xlabel("Sentiment")
        plt.ylabel("Number of Posts")
        plt.tight_layout()
        plt.show()

# === MAIN EXECUTION BLOCK ===
if __name__ == "__main__":
    try:
        root = tk.Tk()
        app = LassanApp(root)
        root.mainloop()
    except Exception:
        print("Error occurred:")
        traceback.print_exc()
        input("Press Enter to exit...")