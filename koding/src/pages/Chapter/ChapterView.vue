<template>
  <v-app>
    <v-app-bar flat color="amber">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        Koding
      </v-app-bar-title>

      <!--<v-btn icon density="compact" class="mx-2" href="/create-tip">
        <v-icon>
          mdi-lightbulb-outline
        </v-icon>
      </v-btn>-->
      <v-btn icon density="compact" class="mx-2" href="/create">
        <v-icon>
          mdi-cast-education
        </v-icon>
      </v-btn>
      <v-btn icon density="compact" class="mx-2" href="/discussions">
        <v-icon>
          mdi-forum-outline
        </v-icon>
      </v-btn>
      <v-btn icon density="compact" class="mx-2" href="/account">
        <v-icon>
          mdi-account
        </v-icon>
      </v-btn>
      <v-btn icon density="compact" class="mx-2" href="/">
        <v-icon>
          mdi-home-outline
        </v-icon>
      </v-btn>
      <v-btn icon density="compact" class="mx-2 mr-5" href="/settings">
        <v-icon>
          mdi-cog-outline
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" width="120" elevation="0" floating color="amber">
    </v-navigation-drawer>
    <v-main id="main">
      <v-card width="100%" class="pa-5 overflow-auto scrollbar" >
        <v-card-title class="text-center">
          <div class="text-h4 pb-3">
            {{ chapter }}
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <Markdown :source="contents" class="markdown"></Markdown>
        </v-card-text>
      </v-card>
    </v-main>
    <v-footer app color="amber" class="d-flex justify-center">
      <span>{{ new Date().getFullYear() }} — <strong>Koding</strong></span>
    </v-footer>
  </v-app>
</template>

<script>
import Markdown from 'vue3-markdown-it';
//import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';



export default {
  name: 'ChapterView',
  delimiters: ["[[", "]]"],
  components: {
    Markdown
  },

  data: () => ({
    courseId: window.location.href.match(/course\/(\d+)/)?.[1],
    drawer: false,
    chapter: 'Variables and Data Types',

    contents: `# Chapter 1: Variables and Data Types in C++

## Introduction

Welcome to the world of C++ programming! In this chapter, we'll dive into the fundamental concepts of variables and data types. These concepts are the building blocks of any programming language, and C++ is no exception. By the end of this chapter, you'll have a solid understanding of how to work with variables and various data types in C++.

## What are Variables?

In C++, a variable is a named storage location in your computer's memory. Variables are used to store and manipulate data in your programs. Think of them as labeled boxes where you can place different types of information. For example, you might use variables to store a person's age, a temperature value, or a piece of text.

## Variable Naming

Variables must have a name, which is used to identify them in your code. When naming variables in C++, remember these rules:

- Variable names are case-sensitive. This means that \`myVariable\` and \`myvariable\` are considered different variables.
- Variable names can consist of letters, digits, and underscores. They must start with a letter or an underscore.
- Be descriptive when naming variables. A name like \`age\` is more meaningful than \`x\` or \`temp\`.

## Data Types

Every variable in C++ has a data type associated with it. A data type specifies the kind of data a variable can hold. Let's explore some common data types:

### Integer Data Types

Integers are whole numbers, both positive and negative. Here are some commonly used integer data types:

- \`int\`: This is a commonly used data type for storing whole numbers. For example, you can use \`int\` to store a person's age or the quantity of items in a shopping cart.
- \`long\`: Use \`long\` when you need to store very large numbers, such as population figures or coordinates.

**Example:**
\`\`\`cpp
int age = 25;
long population = 7800000000;
\`\`\` 

### Floating-Point Data Types

Floating-point numbers include decimal values. They are used when you need to represent values with fractional parts. Common floating-point data types are:

- \`float\`: This data type is suitable for most applications requiring floating-point numbers.
- \`double\`: Use \`double\` when you need higher precision, such as scientific calculations.

**Example:**
\`\`\`cpp
float pi = 3.14159;
double price = 19.99;
\`\`\`

## Summary

| Data Type  | Description                     |
|------------|---------------------------------|
| \`int\`      | Integer data type               |
| \`long\`     | Long integer data type          |
| \`float\`    | Floating-point data type        |
| \`double\`   | Double precision floating-point |
| \`char\`     | Character data type             |
| \`bool\`     | Boolean data type               |
| \`string\`   | String data type                |

## Conclusion
In this chapter, you've learned the basics of variables and data types in C++. Variables are essential for storing and manipulating data in your programs, and understanding data types is fundamental for effective programming. As you continue your journey in C++ programming, you'll use these concepts extensively to build more complex and powerful applications.

    `,
  }),
  methods: {

  },
  mounted() {
  },
  directives: {
    highlight: {
      inserted(el) {
        const blocks = el.querySelectorAll('pre');
        blocks.forEach((block) => {
          console.log(block)
          //hljs.highlightElement(block);
        });
      },
    },
  },
}
</script>

<style>
  body, html {
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  #main {
    display: flex;
    gap: 20px;
    padding: 20px;
    margin-top: 64px;
    margin-bottom: 40px;
    height: calc(100vh - 200px);
    overflow: hidden;
  }
  .scrollbar::-webkit-scrollbar {
    width: 3px;
  }
  .scrollbar::-webkit-scrollbar-track {
    background: #1E1E1E;
  }
  .scrollbar::-webkit-scrollbar-thumb {
    background: #888;
  }
  .scrollbar::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .markdown {
    line-height: 1.6;
    padding: 16px;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 5px;
    user-select: none;
  }

  .markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6 {
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  .markdown li {
    list-style: disc;
    margin-left: 32px;
  }

  .markdown code {
    font-family: 'Courier New', monospace;
    background-color: #333;
    padding: 2px 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .markdown pre code{
    font-family: 'Menlo', monospace;
    padding: 2px 4px;
    border: none;
    background: none;
  }
  .markdown pre {
    font-family: 'Menlo', monospace;
    background-color: #fff;
    padding: 16px;
    border-radius: 4px;
    overflow: auto;
    margin: 16px 0;
    white-space: pre-wrap;
    filter: invert(100%);
  }

  .markdown table {
    border-collapse: collapse;
    width: 100%;
  }

  .markdown th, .markdown td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  .markdown th {
    background-color: #333;
    font-weight: bold;
  }

</style>
