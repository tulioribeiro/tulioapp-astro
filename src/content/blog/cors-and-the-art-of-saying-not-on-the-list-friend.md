---
title: CORS and the Art of Saying "Not on the List, Friend"
description: Just learning something new
pubDate: Apr 20, 2024
---

You're casually browsing the web, and suddenly the site freezes because your browser decides to play the hero of your privacy: "Access denied due to security reasons!" It's not drama; it's CORS: the internet's bouncer.

🧘 First things first, relax. Don't worry, this isn't one of those never-ending posts about technical programming terms. The goal here is simple: to create content that anyone, whether you work in marketing, HR, or are your aunt who barely knows what a browser is, can understand why her recipe website suddenly stopped working.

Because, let's face it, a lot of people have encountered something in the digital world and thought, "Why?" My intention is to explain these things in a way that doesn't require you to be an expert, but with just enough sarcasm that only those already immersed in the tech world will fully appreciate.

If you're a super front-end dev specializing in React and Next.js, and you’ve seen that classic console error:

> Access to fetch at `https://shame-on-you.cors/api` from origin `https://pleaseplease.com` has been blocked by CORS policy

🙃 And thought, "Chill, I just need to configure my Axios properly to fix this," that's fine. I get it, you already know exactly what to do to make CORS bow to your wishes. But anyway.

Now, imagine you're using a website that needs to fetch information from somewhere else on the internet, like a store's database or an external API. Everything seems fine until the browser, vigilant as ever, blocks the action because the site is trying to fetch data from a different domain. The cause? That would be CORS (Cross-Origin Resource Sharing).

🎭 Think of the internet as one big party, and each site is like a guest trying to chat with another. CORS is the bouncer at this digital party. Its job is to make sure no one starts asking for information or grabbing data from another site without proper permission.

When a site tries to access data from somewhere else, CORS checks: "Do you have permission to talk to this server?" If the answer is no, the browser immediately blocks the conversation. It's like, "Sorry, buddy, you’re not on the list." And then you get that infamous console error telling you access was denied.

🛡️ At its core, CORS is there to protect the security of your browsing. When something goes wrong, it's usually because the other site didn't configure the necessary permissions to allow this data exchange.

Okay, but... so what? What do you want me to do? I'm not a programmer, and I don't get this stuff!
Relax, the point here isn't to turn you into an expert. It's just to remind you that the internet tries to protect you without you needing to worry. Your browser isn't "being difficult". It just doesn't want your data ending up on servers or services you've never heard of.

And if you ever hear a front-end developer ranting about CORS because an API integration failed, you can smile and say, "Oh, so the server didn't let the browser in, huh? Classic."

---

<a id="br"></a>

## 🇧🇷 CORS e a Arte de Dizer "Você Não Está na Lista, Amigo"

Você está navegando tranquilamente e, de repente, o site trava porque o navegador decide ser o herói da sua privacidade: "Acesso negado por questões de segurança!". Não é drama, é CORS: O segurança da internet.

🧘 Antes de mais nada, calma. Não se preocupe, este post não é um daqueles textos intermináveis sobre termos técnicos de programação. A ideia aqui é bem simples: criar conteúdo que qualquer pessoa, seja você da área de marketing, pessoas, ou até mesmo sua tia que mal sabe o que é um navegador, consiga entender por que o site da receita de bolo dela deu tilt no navegador.

Porque, sim, tem muita gente por aí que já se deparou com algo no mundo digital e se perguntou: "Por quê?". E minha intenção é explicar essas coisas de forma que você não precise ser um expert para entender, mas com aquele toque de sarcasmo que só quem já está imerso no mundo da tecnologia pode apreciar.

Se você é super dev front-end especialista em React e Next.js e já se deparou com aquele erro clássico no console:

> Access to fetch at `https://shame-on-you.cors/api` from origin `https://pleaseplease.com` has been blocked by CORS policy"

🙃 E aí pensou: "Relaxa, é só configurar meu axios direitinho que resolvo", tá tudo bem. Eu entendo, você já sabe exatamente o que fazer para fazer o CORS se curvar aos seus desejos. Mas, enfim.

Imagine que você está usando um site e ele precisa pegar informações de outro lugar na internet, como dados de uma loja ou informações de um banco de dados. Tudo parece certo até que o navegador, sempre atento, decide bloquear essa ação porque o site está tentando pegar dados de outro domínio diferente. E o responsável por isso é o tal do CORS (Cross-Origin Resource Sharing).

🎭 Imagine que a internet é uma grande festa, e cada site é como uma pessoa tentando conversar com outra. O CORS (Cross-Origin Resource Sharing) é o segurança da balada dessa festa digital. Ele está lá para garantir que ninguém saia pedindo informações ou pegando dados de outro site sem a devida permissão.

Quando um site tenta acessar dados de outro lugar, o CORS verifica: "Você tem autorização para falar com esse servidor?". Se a resposta for não, o navegador imediatamente barra a conversa. É como um "Você não está na lista, amigo". E aí, aparece aquele famoso erro no console dizendo que o acesso foi bloqueado.

🛡️ No fundo, o CORS está ali para proteger a segurança da sua navegação. E quando algo dá errado, geralmente é porque o outro site não configurou as permissões necessárias para liberar essa troca de informações.

Tá, mas... e daí? Quer que eu faça o quê? Não sou programador, nem entendo dessas coisas!
Calma, a ideia aqui não é te transformar em um especialista, mas te lembrar de como a internet tenta proteger você sem que você precise se preocupar. O navegador não está "de implicância". Ele só não quer que seus dados acabem em servidores ou serviços que você nem conhece.

E se um dia ouvir um desenvolvedor de front-end xingando o CORS porque a integração de uma API não funcionou, pode sorrir e dizer: "Ah, então o servidor não deixou o navegador entrar, né? Clássico."
