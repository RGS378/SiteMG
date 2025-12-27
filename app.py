from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("inicialPage/inicio.html")

@app.route("/cursos")
def cursos():
    return render_template("secondPages/cursos.html")

@app.route("/contato")
def contato():
    return render_template("secondPages/contato.html")

@app.route("/galeria")
def galeria():
    return render_template("secondPages/galeria.html")

@app.route("/noticia")
def noticia():
    return render_template("secondPages/noticia.html")

if __name__ == "__main__":
    app.run(debug=True)
