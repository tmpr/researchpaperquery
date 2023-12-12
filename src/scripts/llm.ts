import OpenAI from "openai";

const OPENAI_API_KEY = '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';
const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

export const Prompt = async  (vecResults : string, llmprompt : string) => {
    const prompt = "You are a professor grading a paper. The following are excerpts of that paper: \n"
    + vecResults + "\n\n Your job is to answer a question about these paragraphs. Your response to the question should be in the language the question is written in. Here it is: \n"+llmprompt
    console.log(prompt);
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
    });
    return chatCompletion.choices[0].message;
    
}