FROM python:3.11
WORKDIR /home/user/app
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
    &&  . ~/.profile \
    && . ~/.bashrc \
    && . ~/.nvm/nvm.sh \
    && nvm install 24.11.1 \
    && nvm use 24.11.1\
    && npm install express -y\
    && npm install openai -y
ENV NVM_DIR=/root/.nvm
ENV PATH=$PATH:$NVM_DIR/versions/node/v24.11.1/bin
RUN node -v
COPY server.js local-llm.py /home/user/app
COPY assets /home/user/app/public/assets/
COPY survivors.js index.html /home/user/app/public/

RUN pip install modelscope accelerate fastapi  uvicorn
RUN uvicorn local-llm:app --reload &
ENTRYPOINT ["node", "server.js"]