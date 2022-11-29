from flask import Flask, render_template, request
app = Flask(__name__)

contact = []
number = 0
numberList = []


@app.route("/", methods=['GET', 'POST'])
def showHome():
    if request.method == 'POST':
        global number
        number += 1
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        write_file(name, email, phone)
    return render_template('index.html')


def write_file(name, email, phone):
    global number
    numberTxt = str(number)

    if request.form['name'] != '' and request.form['email'] != '' and request.form['phone'] != '':
        contact.append(
            f"Nome: {name} | Email: {email} | Telefone: {phone}")

    numberList.append(f"{numberTxt}")


@app.route('/contacts')
def showContacts():
    return render_template('contacts.html', contact=contact, numberList=numberList)


@app.route('/website')
def showWebsite():
    return render_template('website.html')


if __name__ == "__main__":
    app.run(debug=True)
