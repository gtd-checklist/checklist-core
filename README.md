# checklist-core

[![Build Status](https://travis-ci.org/gtd-checklist/checklist-core.svg?branch=master)](https://travis-ci.org/gtd-checklist/checklist-core)

## Installation

```
npm i
```

In order to work with this app you need '.env' file that exculded from this repository. You may ask for it to project's developers. You must put this file in root directory.

## Development

```
npm start
```


### Available API:

API route: `https://checklist-core-exsfycvcvi.now.sh/api/v1`


POST   /api/user
= creates new user, you must specify
username (string), email (string) and password (string)


POST   /api/auth
= authenticate registered user, you must specify
email (string) and password (string). You get jw-token as an answer


For all APIs below you must provide valid jw-token in the header in format
{
  ...
  "Authorization": `bearer ${jw-token}`,
  ...
}


GET   /api/activity
Get all user's activity


POST  /api/activity
= creates new acitivity, you must specify
title (string), successCriteria (string), status (string), frequency (array of numbers, ex [1,2,3,4,5])


PUT   /api/activity
= updates existing activity, you must specify
title (string), successCriteria (string), status (string), frequency (array of numbers, ex [1,2,3,4,5])


DELETE /api/activity
= deletes activity, you must specify
title (string)
