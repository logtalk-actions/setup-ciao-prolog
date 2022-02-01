# `setup-ciao-prolog`

This actions sets up a Ciao Prolog environment for use in workflows.

![](https://github.com/logtalk-actions/setup-ciao-prolog/workflows/Test/badge.svg)

## Usage

See [action.yml](action.yml) for the action metadata. The required `ciao-prolog-version` input parameter specifies the version to be installed (`latest` or tag, e.g. `v1.20.0`; default is `latest`).

## Example

```yml
on: push

jobs:
  test:
    runs-on: macOS-latest
    steps:
      - name: Install Ciao Prolog backend
        uses: logtalk-actions/setup-ciao-prolog@master
        with:
          ciao-prolog-version: latest
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: sudo logtalk_tester -p ciao
```

## Contributing

Contributions are most welcome. Contributors are expected to uphold the [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is released under the [Apache License 2.0](LICENSE).

## Current Status

This action is in active development. This action does not support Windows at this time.
