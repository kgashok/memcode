## Using gitpod 

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/kgashok/memcode/gitpod-version)

### Troubleshooting

0. Press the above Blue `Ready to Code` Button
1. Add a valid `env.js` file while the build is happening.
    - Make sure the postgres userid is 'gitpod' and password is 'gitpod'
2. Click on the `Ports` window in the bottom console
        - Again `Port 3000`, click `"Show in Browser"` button 
3. If the `"Show" in Browser"` does not show up, do this: 
    - in the workspace/memcode/ terminale, press <Ctrl-C>
    - run the command `make all` 
    - Go back to Step 2

4. Open .gitignore file and add these lines at the bottom
    - `.gitpod.Dockerfile`
    - `.gitpod.yml`
    - `gitpod.md` 
