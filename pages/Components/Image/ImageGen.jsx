import { useState } from "react";
import styles from './ImageGen.module.css'
function ImageGen() {
    async function onSubmit(event) {
        try {
            const openai = require('openai');
            openai.apiKey = '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';
            const prompt = 'A cat sitting on a couch.';
            const model = 'image-alpha-001';
            const response = await openai.images.create({
                prompt,
                n: 1,
                size: '256x256',
                response_format: 'url',
                model,
            });

            const imageUrl = response.data.url;
            console.log(imageUrl);

        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }
    return (
        <div>
            <h1>Image Generation</h1>
            <main className={styles.main}>
                <form onSubmit={onSubmit}>
                    <input type="submit" value="Generate Image" />
                </form>
            </main>
        </div>
    )
}
export default ImageGen;