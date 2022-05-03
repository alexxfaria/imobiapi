.PHONY: databases destroy

databases:
	@docker-compose up -d
	
destroy:
	@docker-compose down -v --rmi local
