### COMMANDS:

  pipenv run flask db init

  file_template = %%(year)d%%(month).2d%%(day).2d_%%(hour).2d%%(minute).2d%%(second).2d_%%(slug)s

  pipenv run flask db migrate

  pipenv run flask db upgrade

  pipenv run flask seed all


### TO RESET:

  DELETE `dev.db` AND `migrations` folder!!!
