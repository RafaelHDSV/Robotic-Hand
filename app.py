from flask import Flask, render_template, request
app = Flask(__name__)

contact = []


@app.route("/", methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        write_file(name, email, phone)
    return render_template('index.html')


def write_file(name, email, phone):
    if request.form['name'] != '' and request.form['email'] != '' and request.form['phone'] != '':
        contact.append(
            f"Nome: {name} | Email: {email} | Telefone: {phone}")


@app.route('/contacts')
def showContacts():
    return render_template('contacts.html', contact=contact)


if __name__ == "__main__":
    app.run(debug=True)
