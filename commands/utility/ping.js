const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roast-me")
    .setDescription(
      "WARNING: Will roast you completely. Do not perform if you can't take a joke."
    ),
  async execute(interaction) {
    const roasts = [
      `Your code looks like it was written during a 3 a.m. caffeine binge, and I’m pretty sure your GitHub is more of a graveyard for half-finished projects than anything else. You probably copy-paste Stack Overflow solutions like it’s your full-time job and then wonder why they break in production.`,
      `Your code’s about as clean as a dumpster fire. I’m sure your “production-ready” code has more bugs than a low-budget horror movie, and your pull requests? Pure chaos. It’s like you write code with one hand and pray it works with the other. Who needs unit tests when you can just hope everything runs smoothly, right?`,
      `I’m sure you think Git is just a fancy version of “Save As,” and you’ve probably merged directly into main more times than you’ve admitted. Your “solution” to everything is to throw in a console log and hope someone else figures it out.`,
      `Let’s be real—you’re probably the kind of person who uses “any” in TypeScript because the real types are “too much work.” And that component hierarchy? It looks like a toddler’s drawing of a tree—branching everywhere with zero logic.`,
      `You know those “best practices” everyone talks about? Yeah, those are just suggestions to you. Your code is about as maintainable as a house of cards in a windstorm. And I’m sure your comments are as helpful as a road sign that says “keep going.”`,
    ];

    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];

    await interaction.reply(randomRoast);
  },
};
