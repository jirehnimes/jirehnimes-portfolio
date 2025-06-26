.PHONY: component
CssName:=
HookName:=

component:
	ComponentName=$(shell echo ${NAME} | grep -o "[^/]*$$" | tail -1); \
	mkdir -p src/components/$(NAME); \
	touch src/components/$(NAME)/index.ts; \
	touch src/components/$(NAME)/$$ComponentName.tsx; \
	echo """import { default as $$ComponentName } from './$$ComponentName';\
	\n\n\
	export default $$ComponentName;""" >> src/components/$(NAME)/index.ts; \
	echo "export default function $$ComponentName() { return <></>; }" >> src/components/$(NAME)/$$ComponentName.tsx;

css-module:
	$(eval CssName=$(shell echo ${NAME} | grep -o "[^/]*$$" | tail -1))
	CssKebabName=$(shell echo ${CssName} | sed 's/\([A-Z]\)/-\L\1/g;s/^-//;s/\([A-Z]\)/\L\1/g'); \
	echo $$CssKebabName; \
	touch src/components/$(NAME)/$$CssKebabName.module.css

hook:
	$(eval HookName=$(shell echo ${NAME} | grep -o "[^/]*$$" | tail -1))
	HookKebabName=$(shell echo ${HookName} | sed 's/\([A-Z]\)/-\L\1/g;s/^-//;s/\([A-Z]\)/\L\1/g'); \
	echo $$HookKebabName; \
	touch src/components/$(NAME)/$$HookKebabName.hook.ts
